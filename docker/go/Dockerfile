FROM golang:1.19.4-buster AS Builder
WORKDIR /app
COPY main.go ./
RUN go build main.go

FROM gcr.io/distroless/base-debian10
WORKDIR /
COPY --from=Builder /app .
USER nonroot:nonroot

CMD [ "./main" ]