import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
  } from "@material-tailwind/react";
  import {
    HomeIcon,
    ArchiveBoxIcon,
    CurrencyDollarIcon,
  } from "@heroicons/react/24/solid";
   
  export function OrderDetailPickup() {
    return (
      <div className="w-[25rem] mt-1">
        <Timeline>
          <TimelineItem className="h-28">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost">
              <HomeIcon className="h-4 w-4" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h5" color="blue-gray">
                  Pickup Details
                </Typography>
                <p>K.J.Perara</p>
                <Typography variant="small" color="gray" className="font-normal">
                  <address>Katubedda, Moratuwa, SriLanka</address>
                </Typography>
                <p>077-2385612</p>
              </div>
            </TimelineHeader>
          </TimelineItem>
          
          
        </Timeline>
      </div>
    );
  }