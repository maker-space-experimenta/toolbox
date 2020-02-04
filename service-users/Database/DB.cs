namespace service_users.Database
{
    using System.Collections.Generic;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;

    class DBContext : DbContext
    {
        public DbSet<User> Devices { get; set; }

        public DBContext(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlServer("Server=localhost;Database=service_devices;User Id=sa;Password=Pass1word;");
    }
}
