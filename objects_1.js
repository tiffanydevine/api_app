newKitchen {
    chairs: 4, 
    wallColor: "grey", 
    lightFixtures: ["pendant", "recessed", "stand alone"], 
    tables {
        coffeeTables: 2, 
        sideTables: 3, 
        kitchenTables: 1
    }, 
    cabinets: "white"
}

vehiclesRunning {
    buses {
        lines {
            "lineFourteen" :
                    [ 
                    {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9},
                    {vehicleID : 1234, lattitude: 45.14,longitude: 122.68, speed: 45, full: false, minutesOffSchedule: 2}
                    ],
            "lineEight" : 
                    [
                    {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9},
                    {vehicleID : 1234, lattitude: 45.14,longitude: 122.68, speed: 45, full: false, minutesOffSchedule: 2}
                    ]
        }
    },
    lightRail {
        lines {
            "orange" :
                [
                {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9},
                {vehicleID : 1234, lattitude: 45.14,longitude: 122.68, speed: 45, full: false, minutesOffSchedule: 2}
                ],
            "blue" :
                [
                {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9},
                {vehicleID : 1234, lattitude: 45.14,longitude: 122.68, speed: 45, full: false, minutesOffSchedule: 2}
        }
    }, 
    streetCar {
         lines {
            "downtown" :
                [
                {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9},
                {vehicleID : 1234, lattitude: 45.14,longitude: 122.68, speed: 45, full: false, minutesOffSchedule: 2}
                ],
            "southeast" :
                [
                {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9},
                {vehicleID : 1234, lattitude: 45.14,longitude: 122.68, speed: 45, full: false, minutesOffSchedule: 2}
                ],
         }
    },
    commuterRail {
        lines {
            "beverton" :
                [
                {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9}
                ],
                
            "tigard" :
                [
                {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9}
                ]
        }
    },
    tram {
        lines {
            "ohsu" : 
                [
                {vehicleID : 1232, lattitude: 4.14,longitude: 12.628, speed: 425, full: false, minutesOffSchedule: 9}
                ]
        }
    }
}