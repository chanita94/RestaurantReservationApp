namespace RestaurantReservationApi.Models
{
    public class Table
    {
        public int Id { get; set; }
        public required int Seats { get; set; }
        public bool IsReserved { get; set; }
    }
}
