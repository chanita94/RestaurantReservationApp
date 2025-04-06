namespace RestaurantReservationApi.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string PhoneNumber { get; set; }
        public required DateTime Time { get; set; }
        public required int NumberOfGuests { get; set; }
        public required int TableId { get; set; }

        public required Table Table { get; set; }
    }
}
