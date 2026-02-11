export interface VehicleDetails {
  vehicleNumber: string;
  manufacturer: string;
  model: string;
  year: number;
}

export class VehicleService {
  async fetchVehicleDetails(vehicleNumber: string): Promise<VehicleDetails> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          vehicleNumber,
          manufacturer: 'Toyota',
          model: 'Camry',
          year: 2022
        });
      }, 1000);
    });
  }
}
