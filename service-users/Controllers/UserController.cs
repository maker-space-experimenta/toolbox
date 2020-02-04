using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using service_users.Database;
using service_users.Services;

namespace service_users.Controllers
{
    [ApiController]
    [Route("")]
    public class UserController : ControllerBase
    {
        IConfiguration _config;

        public UserController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        [Authorize]
        public object Get()
        {
            return _config;

            Console.WriteLine("db: " + _config.GetValue<string>("TOOLBOX_DB_SERVER"));

            return new
            {
                username = "test",
                display_name = "joni"
            };
        }


        [HttpGet]
        [Route("/me")]
        public User GetMe()
        {
            return new User(HttpContext.User.Claims);
        }

        // [HttpGet]
        // [Route("/all")]
        // [Authorize(Roles = "Administrators")]
        // public List<object> GetAll()
        // {
        //     return new List<object>() {
        //         new { username = "test", display_name = "joni" },
        //         new { username = "bar", display_name = "foo" }
        //     };
        // }
    }
}
