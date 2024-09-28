#include <Arduino.h>
#if defined ARDUINO_ARCH_ESP8266
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#elif defined ARDUINO_ARCH_ESP32
#include <WiFi.h>
#include <HTTPClient.h>
#else
#error Wrong platform
#endif 

#include <WifiLocation.h>

#if __has_include("wificonfig.h")
#include "wificonfig.h"
#else
const char* googleApiKey = "Chave da API geolocation";
const char* ssid = "Nome do wifi que irá se conectar";
const char* passwd = "Senha do wifi que irá se conectar";
#endif

const char* id = "0002";
bool carrinho = true;

WifiLocation location (googleApiKey);
const char* serverUrl = "URL do site";  // Substitua pelo URL do seu site

int buttonState = 0;

// Set time via NTP, as required for x.509 validation
void setClock () {
    configTime (0, 0, "pool.ntp.org", "time.nist.gov");

    Serial.print ("Waiting for NTP time sync: ");
    time_t now = time (nullptr);
    while (now < 8 * 3600 * 2) {
        delay (500);
        Serial.print (".");
        now = time (nullptr);
    }
    struct tm timeinfo;
    gmtime_r (&now, &timeinfo);
}

void setup() {
    Serial.begin(115200);
    pinMode(35, INPUT);
    pinMode(LED_BUILTIN, OUTPUT);
    // Connect to WPA/WPA2 network
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, passwd);
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print("Attempting to connect to WPA SSID: ");
        Serial.println(ssid);
        // wait 5 seconds for connection:
        Serial.print("Status = ");
        Serial.println(WiFi.status());
        delay(500);
    }
    Serial.println ("Connected");
    
}

void loop() {
    buttonState = digitalRead(35);

    setClock();

    digitalWrite(LED_BUILTIN, HIGH);

    location_t loc = location.getGeoFromWiFi();
      
    Serial.println ("Location: " + String (loc.lat, 7) + "," + String (loc.lon, 7));
    Serial.println ("Result: " + location.wlStatusStr (location.getStatus ()));

      // Enviar dados para o servidor
    if(WiFi.status() == WL_CONNECTED) { // Check if we are connected to the WiFi
        HTTPClient http;
        http.begin(serverUrl);  // Specify the URL
        http.addHeader("Content-Type", "application/json"); // Specify content-type header 

        // Criar payload JSON
        String jsonPayload = "{\"latitude\": " + String(loc.lat, 7) + ", \"longitude\": " + String(loc.lon, 7) + ", \"accuracy\": " + String(loc.accuracy) + ", \"id\": " + "2" + ", \"car\": " + false + "}";
        Serial.println(jsonPayload);
        // Enviar requisição POST
        int httpResponseCode = http.POST(jsonPayload);

        // Verificar resposta do servidor
        if (httpResponseCode > 0) {
            String response = http.getString();  // Get the response to the request
            Serial.println("HTTP Response code: " + String(httpResponseCode));
            Serial.println("Response: " + response);
        } else {
            Serial.println("Error on sending POST: " + String(httpResponseCode));
        }

        // Fecha conexão
        http.end();
    } else {
        Serial.println("Error in WiFi connection");
    }

    digitalWrite(LED_BUILTIN, LOW);

    delay(50);
}
