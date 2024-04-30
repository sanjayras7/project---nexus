using Microsoft.EntityFrameworkCore;

namespace ApiRestaurant;

public class CustomerContext:DbContext
{
public CustomerContext(DbContextOptions<CustomerContext> options) : base(options){}

        public DbSet<Customer>CustomerTable{ get; set; }
}

