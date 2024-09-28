<h1>Challenge HackInLoc</h1>

<h2>Introdução</h2>
<p>
  Considerando que o objetivo principal da empresa John Deere era otimizar as operações da empresa, desenvolvemos uma tecnologia que, por meio de conexão Wi-Fi, capta informações dos roteadores próximos à localização dos carrinhos. Essas informações são enviadas à API de geolocalização do Google, que fornece a localização exata dos carrinhos.
Para solucionar o problema relacionado ao excesso de material nos carrinhos do kit, instalamos um botão que os funcionários utilizarão para informar quando o carrinho estiver vazio, possibilitando, assim, a atualização da sua localização.
</p>

<h2>Desenvolvimento</h2>
<img src="assets/Arquitetura.png">
<p>
  O projeto foi feito utilizando principalmente a biblioteca chamada "WifiLocation" no esp32 com a linguagem C++. O esp32 se conecta ao Wi-Fi, e depois escaneia todos os roteadores na região e pegando informações como RSSI(Indicador de Força de Sinal Recebido), MacAddress e o canal, e assim enviando esses dados para a API geolocation utilizando a biblioteca 'WifiLocation', que irá retornar a latitude e longitude do esp32, e depois esses dados são enviados para o site, que foi feito no framework Next, via protocolo HTTP. O site estará hospedado em um servidor na nuvem, assim podendo visualizar as informações pelo site, para teste utilizamos o replit. Os resultados esperados para essa arquitetura é: informações precisas da geolocalização, tranferência de dados bem-sucedidas, atualizações em tempo real e instabilidade da conexão Wi-Fi.
</p>

<h2>Resultados</h2>
<p>
  Como resultados 
</p>
