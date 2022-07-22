import http from "@/http-common";

class SbomDataService {
  querySbomPackagesByPageable(data: any): Promise<any> {
    return http.post("/querySbomPackages", data);
  }

  querySbomPackageById(packageId: string): Promise<any> {
    return http.get(`/querySbomPackage/${packageId}`);
  }

  queryPackageBinaryManagement(packageId: string, binaryType: string): Promise<any> {
    return http.get(`/queryPackageBinaryManagement/${packageId}/${binaryType}`);
  }

  querySbomPackagesByBinary(data: any): Promise<any> {
    return http.post(`/querySbomPackagesByBinary`, data);
  }

}

export default new SbomDataService();
