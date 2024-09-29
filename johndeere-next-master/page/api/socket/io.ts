import { NextApiResponseServerIO } from "@/types/next";
import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

const io = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    const path = "/api/socket/io";
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: path,
      addTrailingSlash: false,
    });

    // Escutando o evento de conexão
    io.on("connection", (socket: any) => {
      console.log(`Novo cliente conectado com IP ${socket.handshake.address}`);

      // Você pode usar o IP aqui conforme necessário, por exemplo, salvá-lo ou enviá-lo para o cliente
    });

    // Append SocketIO server to Next.js socket server response
    res.socket.server.io = io;
  }
  res.end();
};

export default io;