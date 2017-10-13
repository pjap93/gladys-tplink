module.exports = {
  getTPLINK: `
    SELECT * 
    FROM device
    WHERE protocol = 'wifi'
    AND service = 'tplink';
  `,
  getByIdTPLINK: `
    SELECT * 
    FROM device
    WHERE protocol = 'wifi'
    AND service = 'tplink'
    AND id = ?;
  `,
  getTypeByIdTPLINK: `
    SELECT *
    FROM devicetype
    WHERE device = ?;
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