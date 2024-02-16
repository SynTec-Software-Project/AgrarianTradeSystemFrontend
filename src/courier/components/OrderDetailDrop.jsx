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
   
  export function OrderDetailDrop() {
    return (
      <div className="w-[25rem]">
        <Timeline>
          
          <TimelineItem className="h-28">
            
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="red">
                <ArchiveBoxIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h5" color="blue-gray">
                  Drop Details
                </Typography>
                <p>T.M.Dilshan</p>
                <Typography variant="small" color="gray" className="font-normal">
                  <address>Maduragama, Hullogedra, Nikaweratiya</address>
                </Typography>
                <p>077-2385612</p>
              </div>
            </TimelineHeader>
          </TimelineItem>
          
        </Timeline>
      </div>
    );
  }