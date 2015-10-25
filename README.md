# write-good-service
A web service that wraps [write-good](https://github.com/btford/write-good) for use in support of your app.

## Deployment
`$ docker build -t write-good-service .`
`$ docker run -p 49160:8080 -d write-good-service`

## Play
If using `boot2docker`, first get the IP address of the Docker host VM.
`$ boot2docker ip`

Send a `POST` request with the body `{"text": "So the cat was stolen."}` to `$(boot2docker ip):49160`.