namespace toolbox.node.artnet.adapter
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Sockets;
    using System.Text;
    using System.Threading;
    using System.Threading.Tasks;

    public class ArtnetAdapter
    {
        private int FPS = 100;
        private List<byte> data = new List<byte>();

        private byte paketCounter = 0;
        private Timer timer;

        private UdpClient udpClient;

        public string Address { get; set; }
        public int Port { get; set; }

        public ArtnetAdapter(string address, int port) : this(address, port, 20) { }

        public ArtnetAdapter(string address, int port, int FPS)
        {
            this.Address = address;
            this.Port = port;

            this.udpClient = new UdpClient(this.Port);
            this.udpClient.Connect(this.Address, this.Port);

            var timer = new Timer(new TimerCallback(TimerTask));
            timer.Change(0, 1000 / this.FPS);
        }

        public void SendData(params byte[] d)
        {
            this.data = d.ToList();
        }

        private void TimerTask(object timerState)
        {
            List<Byte> sendBytes = Encoding.ASCII.GetBytes("Art-Net").ToList();
            sendBytes.Add(0x00);
            sendBytes.Add(0x00);
            sendBytes.Add(0x50);
            sendBytes.Add(0x0);
            sendBytes.Add(0xD);

            // sequence
            sendBytes.Add(this.paketCounter);

            // physical
            sendBytes.Add(0x00);

            // universe
            sendBytes.Add(0x01);
            sendBytes.Add(0x00);


            if (this.data.Count() % 2 != 0)
                this.data.Add(0x00);

            // Length
            sendBytes.Add((byte)(this.data.Count() >> 8));
            sendBytes.Add((byte)(this.data.Count() & 0xFF));

            sendBytes.AddRange(this.data);
            
            this.udpClient.Send(sendBytes.ToArray(), sendBytes.Count());

            Console.WriteLine("data send to " + this.Address + " data: l=" + this.data.Count);

        }

    }
}