import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CreateTrip } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip />,
  },
  {
    path: "/trip/:tripId",
    element: <TripDetailsPage />,
  },
]);
export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
