using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiRestaurant
{
      [Route("[controller]")]
    [ApiController]

public class CustomerController: ControllerBase
{

 private readonly CustomerContext _context;

        public CustomerController(CustomerContext context)
        {
            _context = context;
        }

  // GET: api/CustomerData
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomerData()
        {
            return await _context.CustomerTable.ToListAsync();
        }

        // POST: api/CustomerData
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomerData(Customer customer)
        {
            _context.CustomerTable.Add(customer);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCustomerData), new { id = customer.UserName }, customer);
        }
    }
}


