"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervieweesService = void 0;
const common_1 = require("@nestjs/common");
const interviewee_repository_1 = require("./repositories/interviewee.repository");
let IntervieweesService = exports.IntervieweesService = class IntervieweesService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createUserDto) {
        return this.repository.create(createUserDto);
    }
    findAll() {
        return this.repository.findAll();
    }
    async findOne(id) {
        const interviewee = await this.repository.findOne(id);
        if (!interviewee) {
            throw new common_1.NotFoundException('Interviewee not found');
        }
        return interviewee;
    }
    update(id, updateUserDto) {
        return this.repository.update(id, updateUserDto);
    }
    remove(id) {
        return this.repository.remove(id);
    }
};
exports.IntervieweesService = IntervieweesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [interviewee_repository_1.IntervieweeRepository])
], IntervieweesService);
//# sourceMappingURL=interviewees.service.js.map