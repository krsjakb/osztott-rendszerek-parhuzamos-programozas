using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using testApp3.Models;

namespace testApp3.Models
{
    public class MainDbContext : DbContext
    {
        public MainDbContext(DbContextOptions<MainDbContext> options) : base(options)
        {
        }

        public DbSet<CarBrand> CarBrands { get; set; } 

        public DbSet<CarType> CarType { get; set; }
    }
}
