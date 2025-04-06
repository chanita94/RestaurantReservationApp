using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantReservationApi.Data;
using RestaurantReservationApi.Models;

namespace RestaurantReservationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TablesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TablesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetTables()
        {
            var tables = await _context.Tables.ToListAsync();
            return Ok(tables);
        }

        [HttpPost]
        public async Task<IActionResult> ReserveTable([FromBody] Reservation reservation)
        {
            var table = await _context.Tables.FindAsync(reservation.TableId);
            if (table == null || table.IsReserved)
            {
                return BadRequest("Table not available.");
            }

            table.IsReserved = true;
            _context.Reservations.Add(reservation);
            await _context.SaveChangesAsync();

            return Ok(reservation);
        }
    }
}
