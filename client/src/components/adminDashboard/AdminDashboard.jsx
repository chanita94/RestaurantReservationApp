export default function AdminDashboard({ reservations }) {
    return (
        <>
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>
                                Table
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Guests
                            </th>
                            <th>
                                Hour
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation, index) =>
                            <tr key={index}>
                                <td>{reservation.table}</td>
                                <td>{reservation.name}</td>
                                <td>{reservation.email}</td>
                                <td>{reservation.phone}</td>
                                <td>{reservation.guests}</td>
                                <td>{reservation.hour}</td>
                                <td>
                                    <button className="btn btn-danger">Cancel</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table >
            </div>
        </>
    )
}