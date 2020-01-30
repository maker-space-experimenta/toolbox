using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using service_users.Services;

namespace service_users.Controllers
{
    [ApiController]
    [Route("")]
    public class UserController : ControllerBase
    {

        public UserController()
        {
        }

        [HttpGet]
        [Authorize]
        public object Get()
        {
            return new
            {
                username = "test",
                display_name = "joni"
            };
        }


        [HttpGet]
        [Route("/me")]
        public UserModel GetMe()
        {
            return new UserModel(HttpContext.User.Claims);
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
