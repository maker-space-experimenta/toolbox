using System;
using System.Collections.Generic;
using System.Linq;

namespace service_users.Services {
    
    public interface IIdentityService
    {
        string GetClaim(string name);
        void AddClaim(string type, string value);
        List<KeyValuePair<string, string>> GetAllClaims();
    }
    
    public class IdentityService :IIdentityService {

        public  List<KeyValuePair<string, string>> claims;
        
        public IdentityService()
        {
            this.claims = new List<KeyValuePair<string, string>>();
        }

        public void AddClaim(string type, string value)
        {
            Console.WriteLine(type + " - " + value);
            this.claims.Add(new KeyValuePair<string, string>(type, value));
        }

        public string GetClaim(string name)
        {
            return this.claims.FirstOrDefault(m=>m.Key == name).Value;
        }

        public List<KeyValuePair<string, string>> GetAllClaims() {
            return this.claims;
        }
    }
}
