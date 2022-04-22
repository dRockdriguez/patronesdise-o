// Closure
const f = (x) => {
	return () => {
    console.log(x)
  }
}

f(4)();

// EJEMPLO
const auditProps = {
  createdAt: {
    default: new Date()
  },
  updatedAt: {
    default: new Date()
  },
  createdBy: {
  	type: 'string',
  	ref: 'USERS'
  },
  updatedBy: {
  	type: 'string',
  	ref: 'USERS'
  }
}

const Model = (defaultProps) => {
	return (name, props) => {
    const schema = {
      ...defaultProps,
      ...props
    }
    return {	
      name,
      schema
    }
  }
}

const constWithAudit = Model(auditProps);

constWithAudit('david', { address: 'calle falsa', age: 32})
constWithAudit('manolo', { weight: 320})