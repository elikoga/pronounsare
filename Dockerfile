FROM gradle:jdk11-jammy AS build

COPY . .

RUN gradle build

FROM openjdk:11-jre-slim

COPY --from=build /home/gradle/build/libs/*.jar /app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app.jar"]
