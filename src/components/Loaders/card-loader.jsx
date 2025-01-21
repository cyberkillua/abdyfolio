import { Skeleton } from "@/components/ui/skeleton";


const CardLoader = () => {
    return (
        <div style={{ width: "calc(100% / 3)" }} className="flex border-e border-e-black flex-col">
            <Skeleton className="h-[45rem] bg-primary w-full" />
            <Skeleton className="h-[2.8rem] w-[15rem] bg-primary mt-[2rem]" />
            <Skeleton className="h-[2.8rem] w-[20rem] bg-primary mt-[1rem]" />
        </div>
    );
}

export default CardLoader;