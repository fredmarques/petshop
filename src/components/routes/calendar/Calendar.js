import './react-big-calendar.css'
import './Calendar.css';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DateTime from 'react-datetime';
import { addEvent } from '../../../actions/events';
import { getAllEvents } from '../../../reducers/events';


moment.defineLocale('pt-br', {
        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
        weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] LT',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : '%s atrás',
            s : 'segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinal : '%dº'
    });
moment.locale('pt-br')
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class Calendar extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = '';
        return (
          <div className={className}>
            <input className="form-control"
              type={field.type}
              placeholder={field.placeholder}
              {...field.input} />
            <div className="text-help">
              {touched ? error : ''}
            </div>
          </div>
        );
    }

    onSubmit(values) {

        // Check if service was selected
        if(values.service === undefined) {
            alert('Escolha um serviço')

        // Check if data was selected
        } else if(values.date === undefined){
            alert('Selecione uma data')

        // Check if data was selected
        } else if(values.creditcard === undefined){
            alert('Insira o número do cartão para pagamento')

        } else {
            const newEvent = {
                title: values.service,
                start: values.date.toDate(),
                end: values.date.add(1, 'hour'),
                desc: `Agendado para ${'fulano'}`
            }
            this.props.addEvent(newEvent);
            alert(  newEvent.title + ' agendada para o dia ' +
                    newEvent.start.toString().substring(8,10) + ' de ' + 
                    newEvent.start.toString().substring(4,7) + ' de ' + 
                    newEvent.start.toString().substring(11,15) + ' as ' + 
                    newEvent.start.toString().substring(16,21) + ' horas');
            values.service = '';
            values.date = '';
            values.creditcard = '';
        }
    }

    render() {
        const { handleSubmit, eventsList } = this.props;
        console.log(this.props);
        return (
            <div className={"rbc-calendar container-fluid"}>
                <div className={'scheduleForm'}>
                    <h3>Agende seu serviço</h3>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className={'form-inline'}>
                        <Field
                            name="service"
                            label="Serviço"
                            placeholder="Serviço"
                            type="text"
                            component={({input}) => (
                                <select {...input}>
                                    <option value="">Escolha um serviço</option>
                                    <option value="consulta">Consulta</option>
                                    <option value="vacina">Vacina</option>
                                    <option value="banhoTosa">Banho e tosa</option>
                                </select>
                            )}
                        />
                        <Field 
                            name="date"
                            label="Data"
                            type="text"
                            component={
                                ({ input }) => (
                                    <DateTime {...input} locale="pt-br" placeholder="Dia e hora" />)}
                        />
                        <Field 
                            name="creditcard"
                            label="creditcard"
                            placeholder="Número do cartão"
                            type="text"
                            component={this.renderField}
                        />
                        <button type="submit" className="btn btn-success">Agendar</button>
                    </form>
                </div>
                <BigCalendar
                    views={['month', 'week', 'day', 'agenda']}
                    events={eventsList}
                    scrollToTime={new Date()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        eventsList: state.events.events || []
    }
}

export default reduxForm({
    form: 'Calendar'
})(
    connect(mapStateToProps, {addEvent})(Calendar)
);