import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateIntervieweeDto {
  @IsString()
  generalInfo: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsNotEmpty()
  @IsIn([
    'Branco',
    'Pardo',
    'Preto',
    'Indígena',
    'Amarelo',
    'Prefiro não responder',
  ])
  race: string;

  @IsNotEmpty()
  @IsIn([
    'Mulher cis',
    'Mulher trans',
    'Homens cis',
    'Homem trans',
    'Não-binário',
    'Prefiro não responder',
  ])
  genderIdentity: string;

  @IsNotEmpty()
  @IsIn(['Rede Pública', 'Rede Privada', 'Misto'])
  primarySecondaryEducation: string;

  @IsNotEmpty()
  @IsIn([
    'Ensino Médio Incompleto',
    'Ensino Médio Completo',
    'Graduação Incompleta',
    'Graduação Completa',
    'Pós Graduação, Mestrado, Doutorado, PHD',
  ])
  academicBackground: string;

  @IsBoolean()
  volunteerWork: boolean;

  @IsBoolean()
  environmentalAgenda: boolean;

  @IsBoolean()
  environmentalInterest: boolean;

  @IsBoolean()
  noInvolvement: boolean;

  @IsString()
  questions: string; // textarea

  @IsNotEmpty()
  @IsInt()
  knowledgeLevel: number; // radio buttons with numbers 1 at 10

  @IsNotEmpty()
  @IsInt()
  climateConcerns: number; // radio buttons with numbers 1 at 10

  // all agenda_climatic are an input checkbox of the same div
  @IsBoolean()
  agendaClimaticNews: boolean;

  @IsBoolean()
  agendaClimaticSchool: boolean;

  @IsBoolean()
  agendaClimaticConversations: boolean;

  @IsBoolean()
  agendaClimaticCommunities: boolean;

  @IsBoolean()
  agendaClimaticWithoutExposure: boolean;

  // all booleans below are an input checkbox in the same div
  @IsBoolean()
  greenJob: boolean;

  @IsBoolean()
  carbonMarket: boolean;

  @IsBoolean()
  climateJustice: boolean;

  @IsBoolean()
  globalWarming: boolean;

  @IsBoolean()
  unafm: boolean;

  @IsBoolean()
  sustainableDevelopment: boolean;

  @IsBoolean()
  climateAction: boolean;

  @IsBoolean()
  waterCrisis: boolean;

  @IsBoolean()
  impactAgricultureGasEmissions: boolean;

  @IsBoolean()
  importancePreservingAmazonForest: boolean;

  @IsIn([
    'Já estudei sobre',
    'Vi algumas notícias sobre',
    'Um pouco em redes sociais',
    'Não vi nada',
  ])
  heardAboutOilExploration: string; // is a select tag with the options upside

  @IsIn([
    'Sim, li ou ouvi uma ou mais notícias sobre',
    'Apenas li ou ouvi manchetes',
    'Talvez tenha ouvido falar',
    'Nunca ouvi falar',
  ])
  consumptionOutweighsEcologicalResources: string; // is a select tag with the options upside

  @IsString()
  descriptionFinal: string; // a textarea tag

  @IsString()
  campinasChanges: string; // a textarea tag

  @IsString()
  comments: string; // a textarea tag
}
