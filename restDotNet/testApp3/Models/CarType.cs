using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testApp3.Models
{
    public class CarType
    {
        public long Id { get; set; }
        public string TypeName { get; set; }
        public long BrandId { get; set; }
        public CarBrand Brand { get; set; }
    }
}
