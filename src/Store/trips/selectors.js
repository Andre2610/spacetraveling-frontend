export const selectTrips = (state) => state.trips;

export const selectFilteredTrips = (id) => {
  return (state) => {
    return state.trips.filter((trip) => {
      return parseInt(trip.planetId) === parseInt(id);
    });
  };
};
