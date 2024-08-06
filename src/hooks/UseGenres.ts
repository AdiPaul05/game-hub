import useData from "./useData";
export interface Genre{
    image_background: any;
    id: number;
    name: string;
}


const useGenres = () => useData<Genre>('/genres');

export default useGenres;