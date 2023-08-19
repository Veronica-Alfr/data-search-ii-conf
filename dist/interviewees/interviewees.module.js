"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervieweesModule = void 0;
const common_1 = require("@nestjs/common");
const interviewees_service_1 = require("./interviewees.service");
const interviewees_controller_1 = require("./interviewees.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const interviewee_repository_1 = require("./repositories/interviewee.repository");
let IntervieweesModule = exports.IntervieweesModule = class IntervieweesModule {
};
exports.IntervieweesModule = IntervieweesModule = __decorate([
    (0, common_1.Module)({
        controllers: [interviewees_controller_1.IntervieweesController],
        providers: [interviewees_service_1.IntervieweesService, prisma_service_1.PrismaService, interviewee_repository_1.IntervieweeRepository],
    })
], IntervieweesModule);
//# sourceMappingURL=interviewees.module.js.map