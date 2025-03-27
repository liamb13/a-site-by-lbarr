"use client";
import React from "react";

const signature = `%c
                                                                                     
                                                                                     
                             000000000000000000000000000                             
              000000000000000000000000000000000000000000000000000000000              
          00000000000000000000000000000       00000000000000000000000000000          
         000     000      00        000       000      00        000     000         
        000      000     00    00   000       000     00    00   000      000        
        000      000    00    00    000       000    00    00    000      000        
        000      000         00    000         000        00     000      000        
         000      000             000           000             000      000         
          000       0000000000000000             0000000000000000       0000         
       000000         00000000000       0000        00000000000         000000       
   0000000                                00000                            0000000   
       00000                                00000                        00000       
         000                              00000                          000         
         000                            0000                             000         
          0000                                                         0000          
            0000000000000    000   000   000   000   000    0000000000000            
              0000000000000  000   000   000   000   000  0000000000000              
                             000000000000000000000000000                             
                                000000000000000000000                                
                                                                                     
                                                                                     
%c                         MADE BY: LBARR.COM                         
%c                                                                                     
                                                                                     
`;

interface CreditProps {
  delay?: number; // Delay in milliseconds before showing the signature
}

/**
 * A React component that displays a stylized console signature.
 * The signature appears in the browser's console with custom styling and formatting.
 *
 * @example
 * // Default usage (1 second delay)
 * <Credit />
 *
 * @example
 * // Custom delay
 * <Credit delay={2000} /> // Show after 2 seconds
 *
 * @param {CreditProps} props - Component props
 * @param {number} [props.delay=1000] - Delay in milliseconds before showing the signature
 */
const Credit = ({ delay = 1000 }: CreditProps) => {
  setTimeout(() => {
    console.log(
      signature,
      "color: #007bff; background-color: #0f1333; font-size: 12px; line-height: 15px; font-family: monospace;",
      "color: white; background-color: #0f1333; font-size: 15px; line-height: 17px; font-family: monospace;",
      "color: #007bff; background-color: #0f1333; font-size: 12px; line-height: 15px; font-family: monospace;"
    );
  }, delay);

  return null;
};

export default Credit;
