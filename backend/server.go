package main

import (
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
	"log"
	"net/http"
)

func main() {
	grpcServer := grpc.NewServer()
	wrappedGrpc := grpcweb.WrapServer(grpcServer)
	httpServer := http.Server{
		Handler: http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
			wrappedGrpc.ServeHTTP(resp, req)
		}),
		Addr: ":8080",
	}
	log.Fatal(httpServer.ListenAndServe())
}
