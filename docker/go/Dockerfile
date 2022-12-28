FROM golang:1.19.4-buster as builder
WORKDIR /app
COPY main.go ./
RUN go build -o /main main.go

FROM scratch
WORKDIR /
COPY --from=builder /main /main
CMD [ "./main" ]