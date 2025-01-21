import { Skeleton } from "@/components/ui/skeleton";


const CardLoader = () => {
    return (
        <div className="flex w-[100%] sm:w-[33.333%] flex-col">
            <Skeleton className="h-[40rem] sm:h-[45rem] border-e-black border-e-2 bg-primary w-full" />
            <Skeleton className="h-[2.8rem] w-[15rem] bg-primary mt-[2rem]" />
            <Skeleton className="h-[2.8rem] w-[20rem] bg-primary mt-[1rem]" />
        </div>
    );
}

export default CardLoader;