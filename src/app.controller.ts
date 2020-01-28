import { Controller, Get, Request, Post, UseGuards, Res } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard("local"))
  @Post("auth/login")
  async login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("hasura")
  check(@Request() req, @Res() res) {
    console.log("hasura.check");
    console.log(req.user);
    const payload : any = {
      
    }
    res.status(200).send("OK");
  }
  @Post("test")
  test() {
    return "OK";
  }
}
