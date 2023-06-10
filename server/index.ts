import express from "express";
import cors from "cors";
import { Board, Led } from "johnny-five";

const app = express();
app.use(cors());

app.listen("3000", () => {
  console.log("Server on");
});

const board = new Board();
board.on("ready", () => {
  const led = new Led(13);
  app.get("/on", (req, res) => {
    led.on();
    res.send(`STATUS LED: ${led.isOn ? "TRUE" : "OFF"}`);
  });

  app.get("/off", (req, res) => {
    led.off();
    res.send(`STATUS LED: ${led.isOn ? "TRUE" : "OFF"}`);
  });

  app.get("/switch", (req, res) => {
    res.send("STATUS LED: SWITCH MODE");

    setInterval(async () => {
      led.on();
      setTimeout(() => {
        led.off();
      }, 1000);
    }, 2000);
  });
});
