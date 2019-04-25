import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model() {
        return Promise.resolve(EmberObject.create({
            label: 'this is the label we want to check',
            name: 'georg',
            city: 'linz'
        }));
    }
});
