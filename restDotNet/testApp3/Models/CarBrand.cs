using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testApp3.Models
{
    public class CarBrand
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Origin { get; set; }
        public virtual ICollection<CarType> CarTypes { get; set; }
    }
}
