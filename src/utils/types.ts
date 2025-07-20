// <======== Exporting Types for Home-Page ========>
export interface HomePageProps {
    setSelectedServiceDetail: React.Dispatch<React.SetStateAction<number>>,
};


// <======== Exporting Types for Services-Page ========>
export interface ServicesPageProps {
    selectedServiceDetail: number,
    setSelectedServiceDetail: React.Dispatch<React.SetStateAction<number>>,
};