namespace toolbox.node.artnet
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Sockets;
    using System.Text;
    using System.Threading;
    using System.Threading.Tasks;
    using toolbox.node.artnet.adapter;

    using ColorBlender;

    class Program
    {
        private static Timer timer;

        static byte counter = 0;
        // static UdpClient udpClient;

        static byte ledCount = 96;

        static byte[] CreateData(byte r, byte g, byte b)
        {
            List<Byte> data = new List<byte>();

            for (int i = 0; i < ledCount; i++)
            {
                data.Add(r);
                data.Add(g);
                data.Add(b);
            }
            return data.ToArray();
        }

        static List<ArtnetAdapter> adapters;

        static int Tick = 0;

        static void Main(string[] args)
        {
            // var adapter = new ArtnetAdapter("127.0.0.1", 6454);

            adapters = new List<ArtnetAdapter>() {
                // new ArtnetAdapter("127.0.0.1", 6454),
                // new ArtnetAdapter("192.168.12.159", 6454),
                new ArtnetAdapter("192.168.12.161", 6454),
                // new ArtnetAdapter("192.168.12.186", 6454)
                // new ArtnetAdapter("151.217.117.255", 6454)
            };

            timer = new Timer(new TimerCallback(Loop));
            timer.Change(2, 1);
            Console.ReadKey();
        }


        static byte R = 255;
        static byte G = 0;
        static byte B = 0;

        static void RainbowFull(object timerState)
        {
            var data = new List<Byte>();

            if (Tick < 255)
            {
                R--;
                G++;
                B = 0;
            }
            else if (Tick < 2 * 255)
            {
                R = 0;
                G--;
                B++;
            }
            else if (Tick < 3 * 255)
            {
                R++;
                G = 0;
                B--;
            }


            for (int i = 0; i < ledCount; i++)
            {
                var single = new List<Byte>() { R, G, B, 0 };
                data.AddRange(single);
            }

            adapters.ForEach(adapter => adapter.SendData(data.ToArray()));

            Tick++;
            Tick = Tick % (3 * 255);
        }


        static void Loop(object timerState)
        {
            var data = new List<Byte>();

            for (int i = 0; i < ledCount; i++)
            {
                if (i < ledCount / 3)
                {
                    R--;
                    G++;
                    B = 0;
                }
                else if (i < 2 * (ledCount / 3))
                {
                    R = 0;
                    G--;
                    B++;
                }
                else
                {
                    R++;
                    G = 0;
                    B--;
                }

                var single = new List<Byte>() { R, G, B, 0 };
                data.AddRange(single);
            }

            var n = data.Count;
            data.AddRange(data.Take(4 * Tick));
            data = data.TakeLast(data.Count - (4 * Tick)).ToList();

            adapters.ForEach(adapter => adapter.SendData(data.ToArray()));

            Tick++;
            Tick = Tick % ledCount;
        }


    }

}