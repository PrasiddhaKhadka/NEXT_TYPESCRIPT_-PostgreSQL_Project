import { ShoppingCart, UserIcon } from "lucide-react";
import Image  from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
    return <header className="w-full border-b">
        <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href={'/'} className="flex items-center gap-2">
                    <Image src={'/images/logo.svg'} alt={APP_NAME}
                     width={40}
                      height={40} 
                      priority={true} 
                      />
                    <span className="hidden lg:block font-bold text-2l ml-3">{APP_NAME}</span>
                    </Link>
            </div>

            {/* BUTTONS */}
            <div className="space-x-2">
                <Button asChild variant='ghost'>
                    <Link href={'/cart'}>
                        <ShoppingCart className="w-5 h-5"/> Cart
                    </Link>
                </Button>

                <Button asChild variant='ghost'>
                    <Link href={'/sign-in'}>
                        <UserIcon className="w-5 h-5"/> Sign In
                    </Link>
                </Button>
            </div>
        </div>
    </header>
}


export default Header;