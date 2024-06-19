"use client"
import React, { useEffect } from "react"
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
                                                                                     
                                                                                     
%c                  MADE BY LBARR.COM                  
%c                                                                                     
                                                                                     
`

const Credit = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log(
        signature,
        "color: #007bff; background-color: #0f1333; font-size: 1rem; line-height: 1; font-family: monospace;",
        "color: white; background-color: #0f1333; font-size: 1.603rem; line-height: 1; font-family: monospace;",
        "color: #007bff; background-color: #0f1333; font-size: 1rem; line-height: 1; font-family: monospace;"
      )
    }, 1000)
  }, [])

  return null
}

export default Credit
