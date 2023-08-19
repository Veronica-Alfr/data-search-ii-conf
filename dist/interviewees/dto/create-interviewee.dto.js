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
exports.CreateIntervieweeDto = void 0;
const class_validator_1 = require("class-validator");
class CreateIntervieweeDto {
}
exports.CreateIntervieweeDto = CreateIntervieweeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "generalInfo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateIntervieweeDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)([
        'Branco',
        'Pardo',
        'Preto',
        'Indígena',
        'Amarelo',
        'Prefiro não responder',
    ]),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "race", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)([
        'Mulher cis',
        'Mulher trans',
        'Homens cis',
        'Homem trans',
        'Não-binário',
        'Prefiro não responder',
    ]),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "genderIdentity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(['Rede Pública', 'Rede Privada', 'Misto']),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "primarySecondaryEducation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)([
        'Ensino Médio Incompleto',
        'Ensino Médio Completo',
        'Graduação Incompleta',
        'Graduação Completa',
        'Pós Graduação, Mestrado, Doutorado, PHD',
    ]),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "academicBackground", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "volunteerWork", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "environmentalAgenda", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "environmentalInterest", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "noInvolvement", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "questions", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateIntervieweeDto.prototype, "knowledgeLevel", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateIntervieweeDto.prototype, "climateConcerns", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "agendaClimaticNews", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "agendaClimaticSchool", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "agendaClimaticConversations", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "agendaClimaticCommunities", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "agendaClimaticWithoutExposure", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "greenJob", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "carbonMarket", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "climateJustice", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "globalWarming", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "unafm", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "sustainableDevelopment", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "climateAction", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "waterCrisis", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "impactAgricultureGasEmissions", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "importancePreservingAmazonForest", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "esg", void 0);
__decorate([
    (0, class_validator_1.IsIn)([
        'Já estudei sobre',
        'Vi algumas notícias sobre',
        'Um pouco em redes sociais',
        'Não vi nada',
    ]),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "heardAboutOilExploration", void 0);
__decorate([
    (0, class_validator_1.IsIn)([
        'Sim, li ou ouvi uma ou mais notícias sobre',
        'Apenas li ou ouvi manchetes',
        'Talvez tenha ouvido falar',
        'Nunca ouvi falar',
    ]),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "consumptionOutweighsEcologicalResources", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "descriptionFinal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "campinasChanges", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIntervieweeDto.prototype, "comments", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIntervieweeDto.prototype, "dataPermission", void 0);
//# sourceMappingURL=create-interviewee.dto.js.map