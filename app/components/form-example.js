import Component from '@ember/component';
import Changeset from 'ember-changeset';
import {computed, defineProperty} from '@ember/object';
export default Component.extend({

    validate(object) {
        if (object.newValue.length < 3) {
            return Promise.resolve('too short ' + object.key + '!');
        }
        return Promise.resolve(true);
    },

    init() {
        this._super(...arguments);
        this.set('changeset', new Changeset(this.model, this.validate, {
            validate: this.validate
        }));

        defineProperty(this, 'errorMessage', computed('changeset.error.' + this.cityKey, () => {
            console.log('errorMessage recalc');
            if (this.changeset.error && this.changeset.error[this.cityKey]) {
                return this.changeset.error[this.cityKey].validation;
            }
            return '';
        }));

    },

    actions: {
        changeValue(event) {
            const {name, value} = event.target;
            this.set('changeset.' + name, value);
        }
    }

});
