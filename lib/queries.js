module.exports = {
/*
    SELECT device.id,device.identifier,dit as devicetype.id,devicetype.type 
    FROM device
    JOIN devicetype devicetype = device.id
    WHERE protocol = 'wifi'
    AND service = 'tplink'
    AND identifier like( ? );
*/
  delete: 'DELETE FROM house WHERE id = ?;',
  get: `SELECT * FROM house LIMIT ? OFFSET ?;`,
  getById: 'SELECT * FROM house WHERE id = ?;',
  getAll: `SELECT * FROM house;`,
  getTPLINK: `
    SELECT * 
    FROM device
    WHERE protocol = 'wifi'
    AND service = 'tplink';
  `,
  getTPLINKType: `
    SELECT device.id,device.identifier, devicetype.id as d_id, devicetype.type
    FROM device
    JOIN devicetype ON devicetype.device = device.id
    WHERE protocol = 'wifi'
    AND service = 'tplink'
    AND (devicetype.type='power' or devicetype.type='total')
    AND device.identifier like (?);
  `,
  getTPLINKDeviceType: `
    SELECT devicetype.id,devicetype.type,device.identifier,device.id 
    FROM devicetype
    JOIN device ON devicetype.device = device.id
    WHERE (type = 'total' OR type = 'power')
    AND device = ?
    AND sensor = 1;
  `
};