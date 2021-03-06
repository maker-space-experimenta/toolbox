
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Claims;
using System.Text.Json.Serialization;

namespace service_users.Database
{

    public class User
    {

        public User()
        {
            this.Settings = new List<UserSetting>();
        }

        public User(IEnumerable<Claim> claims) : this()
        {

            this.UserName = claims.First(m => m.Type == "preferred_username").Value;
            this.Firstname = claims.FirstOrDefault(m => m.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname")?.Value;
            this.Lastname = claims.FirstOrDefault(m => m.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname")?.Value;
            this.Email = claims.FirstOrDefault(m=>m.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress")?.Value;


            this.Claims = claims.Select(m=> { return new KeyValuePair<string, string>(m.Type, m.Value); });
        }

        public string UserName { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public string Email { get; set; }

        public IEnumerable<UserSetting> Settings { get; set; }

        [JsonIgnore]
        [NotMapped]
        public IEnumerable<KeyValuePair<string, string>> Claims { get; set; }

    }

}
