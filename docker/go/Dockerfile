FROM golang:1.16-alpine AS Builder
WORKDIR /app
COPY *.go ./
RUN go build main.go

FROM golang:1.16-alpine
WORKDIR /app
COPY --from=Builder /app .

CMD [ "./main" ]