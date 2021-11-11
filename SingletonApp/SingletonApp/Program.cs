using System;

namespace SingletonApp
{
    class Program
    {
        static void Main(string[] args)
        {
            MySingleton mySingleton = MySingleton.GetInstance;
            mySingleton.DoSomething();

            MyNonSingleton myNonSingleton = new();
            myNonSingleton.DoSomething();
        }
    }

    public class MyNonSingleton
    {
        public void DoSomething()
        {
            Console.WriteLine("NonSingleton class code has been called");
        }
    }

    public class MySingleton
    {
        //private static MySingleton instance = new MySingleton();
        private static MySingleton instance = null;
        private MySingleton() { }

        public static MySingleton GetInstance
        {
            get
            {
                if (instance == null)
                {
                    instance = new MySingleton();
                }
                return instance;
            }
        }

        public void DoSomething()
        {
            Console.WriteLine("Singleton class code has been called");
        }
    }
}
