function DashboardChart() {
    return (
    //   <div className="bg-white flex flex-col pl-4 pr-6 pt-4 pb-7 rounded-xl max-md:pr-5">
    //     <div className="justify-between items-stretch flex w-[465px] max-w-full gap-5 self-start max-md:flex-wrap">
    //       <div className="text-neutral-400 text-center text-xs font-semibold tracking-wider uppercase grow whitespace-nowrap">
    //         Transactions Chart
    //       </div>
    //       <div className="items-stretch self-center flex gap-5 my-auto">
    //         <div className="items-center flex justify-between gap-1.5">
    //           <div className="bg-teal-900 flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-md" />
    //           <div className="text-zinc-800 text-center text-xs font-semibold tracking-wider capitalize self-stretch grow whitespace-nowrap">
    //             Income
    //           </div>
    //         </div>
    //         <div className="items-center flex justify-between gap-1.5">
    //           <div className="bg-yellow-900 flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-md" />
    //           <div className="text-zinc-800 text-center text-xs font-semibold tracking-wider capitalize self-stretch grow whitespace-nowrap">
    //             Expenditure
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="text-zinc-600 text-right text-xs font-medium z-[1] whitespace-nowrap ml-5 mt-5 self-start max-md:ml-2.5">
    //       1000
    //     </div>
    //     <img
    //       loading="lazy"
    //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2ff3c8f3dcd962d351d2844330149197f8c8e5076ef07b473bbb9ff3eb0fe4?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
    //       className="aspect-[13] object-contain object-center w-[13px] stroke-[1px] stroke-zinc-800 overflow-hidden z-[1] mt-0 max-w-full ml-14 self-start max-md:ml-2.5"
    //     />
    //     <img
    //       loading="lazy"
    //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/014ec3724b9d9ddd7caab0c79087c4eb78160b6e91c5e0fcfcc6bfba065b1c2a?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
    //       className="aspect-[0.01] object-contain object-center w-px stroke-[1px] stroke-zinc-800 overflow-hidden max-w-full ml-16 self-start max-md:ml-2.5"
    //     />
    //     <img
    //       loading="lazy"
    //       srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e9736925-bfaa-4f51-b585-209d41d2feb9?apiKey=faebe522c5274d9bbb3b78baf8e37e19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9736925-bfaa-4f51-b585-209d41d2feb9?apiKey=faebe522c5274d9bbb3b78baf8e37e19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9736925-bfaa-4f51-b585-209d41d2feb9?apiKey=faebe522c5274d9bbb3b78baf8e37e19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9736925-bfaa-4f51-b585-209d41d2feb9?apiKey=faebe522c5274d9bbb3b78baf8e37e19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9736925-bfaa-4f51-b585-209d41d2feb9?apiKey=faebe522c5274d9bbb3b78baf8e37e19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9736925-bfaa-4f51-b585-209d41d2feb9?apiKey=faebe522c5274d9bbb3b78baf8e37e19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9736925-bfaa-4f51-b585-209d41d2feb9?apiKey=faebe522c5274d9bbb3b78baf8e37e19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9736925-bfaa-4f51-b585-209d41d2feb9?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
    //       className="aspect-[4.74] object-contain object-center w-full overflow-hidden self-center z-[1] mt-0 max-w-[891px] max-md:max-w-full"
    //     />
    //     <div className="flex mt-0 w-[43px] max-w-full flex-col items-stretch ml-6 self-start max-md:ml-2.5">
    //       <div className="flex items-stretch justify-between gap-2.5">
    //         <div className="text-zinc-600 text-right text-xs font-medium grow whitespace-nowrap">
    //           750
    //         </div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2ff3c8f3dcd962d351d2844330149197f8c8e5076ef07b473bbb9ff3eb0fe4?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
    //           className="aspect-[13] object-contain object-center w-[13px] stroke-[1px] stroke-zinc-800 overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
    //         />
    //       </div>
    //       <div className="flex items-stretch justify-between gap-2.5 mt-10">
    //         <div className="text-zinc-600 text-right text-xs font-medium grow whitespace-nowrap">
    //           500
    //         </div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2ff3c8f3dcd962d351d2844330149197f8c8e5076ef07b473bbb9ff3eb0fe4?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
    //           className="aspect-[13] object-contain object-center w-[13px] stroke-[1px] stroke-zinc-800 overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
    //         />
    //       </div>
    //       <div className="flex items-stretch justify-between gap-2.5 mt-10">
    //         <div className="text-zinc-600 text-right text-xs font-medium grow whitespace-nowrap">
    //           250
    //         </div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2ff3c8f3dcd962d351d2844330149197f8c8e5076ef07b473bbb9ff3eb0fe4?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
    //           className="aspect-[13] object-contain object-center w-[13px] stroke-[1px] stroke-zinc-800 overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
    //         />
    //       </div>
    //     </div>
    //     <div className="text-zinc-800 text-right text-xs font-medium z-[1] whitespace-nowrap ml-9 mt-10 self-start max-md:ml-2.5">
    //       0
    //     </div>
    //     <div className="self-center flex w-full max-w-[906px] flex-col items-stretch max-md:max-w-full">
    //       <div className="flex items-stretch justify-between gap-0.5 max-md:max-w-full max-md:flex-wrap">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2ff3c8f3dcd962d351d2844330149197f8c8e5076ef07b473bbb9ff3eb0fe4?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
    //           className="aspect-[13] object-contain object-center w-[13px] stroke-[1px] stroke-zinc-800 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/643c349c4c2ab5346451cda4d6a792d416b738da3537f5ddec8115b2253d34fc?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
    //           className="aspect-[891] object-contain object-center w-full stroke-[1px] stroke-zinc-800 overflow-hidden grow basis-[0%] max-md:max-w-full"
    //         />
    //       </div>
    //       <div className="self-center flex w-full max-w-[748px] items-start justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
    //         <div className="text-zinc-600 text-center text-xs font-medium whitespace-nowrap self-start">
    //           Dec
    //         </div>
    //         <div className="text-zinc-600 text-center text-xs font-medium self-start">
    //           Jan
    //         </div>
    //         <div className="text-zinc-600 text-center text-xs font-medium self-start">
    //           Feb
    //         </div>
    //         <div className="text-zinc-600 text-center text-xs font-medium self-start">
    //           Mar
    //         </div>
    //         <div className="text-zinc-600 text-center text-xs font-medium self-stretch">
    //           Apr
    //         </div>
    //         <div className="text-zinc-600 text-center text-xs font-medium self-stretch">
    //           May
    //         </div>
    //         <div className="text-zinc-600 text-center text-xs font-medium self-start">
    //           Jun
    //         </div>
    //         <div className="text-sky-950 text-center text-xs font-bold whitespace-nowrap self-start">
    //           Jul
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  
      <img
        loading="lazy"
        style={{paddingBottom: "30px"}}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd02726aff694ff39834828cf789d71dd3f8b36a7c195b120b3862986404851?apiKey=faebe522c5274d9bbb3b78baf8e37e19&"
        className="aspect-[3.0] object-contain object-center w-full overflow-hidden max-md:max-w-full"
      />
    );
  }
  
  export default DashboardChart;