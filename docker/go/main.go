// package main

// import (
// 	"fmt"
// 	"log"
// 	"net/http"
// )
// func main() {
//     http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
//         fmt.Fprintf(w, "Full Cycle Rocks!!")
//     })
//     log.Fatal(http.ListenAndServe(":8080", nil))
// }

package main

import "fmt"
func main() {
    fmt.Println("Full Cycle Rocks!!")
}